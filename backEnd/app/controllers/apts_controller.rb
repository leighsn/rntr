require_relative '../adapters/crime_adapter.rb'
require_relative '../adapters/distance_adapter.rb'
require_relative '../adapters/map_adapter.rb'
require_relative '../adapters/school_adapter.rb'
require_relative '../adapters/yelp_adapter.rb'
require 'byebug'
class AptsController < ApplicationController

  def show
     data = params["id"].split("&")
     apartment = Apartment.create(address: data[0], user_id: data[1])

     user = User.find(data[1])
    #  crime_data = CrimeAdapter.get_crime(address)
     apt_crime = CrimeAdapter.get_crime(apartment)
     apt_commute = DistanceAdapter.get_distance(apartment)
    #  origin: apartment.address, destination: apartment.user.destination)
     apt_school = SchoolAdapter.get_all_grades(apartment)
     apt_amenities1 = YelpAdapter.get_amenities(search: user.category_1, apartment: apartment)
     apt_amenities2 = YelpAdapter.get_amenities(search: user.category_2, apartment: apartment)
     apt_amenities3 = YelpAdapter.get_amenities(search: user.category_3, apartment: apartment)

     weights = calculate_weights(user)
     score = calculate_score(apartment, weights)

     render json: {
       data: {
         crime_data: {
           felonies: apt_crime.felonies,
           misdemeanors: apt_crime.misdemeanors,
           violations: apt_crime.violations
         },
         distance_data: apt_commute.duration.to_i,
         school_data: {
           a_schools: apt_school.a_schools,
           b_schools: apt_school.b_schools,
           c_schools: apt_school.c_schools,
           d_schools: apt_school.d_schools,
           f_schools: apt_school.f_schools,
         },
         amenities_data: {
           category_1: apt_amenities1,
           category_2: apt_amenities2,
           category_3: apt_amenities3
         }
       },
       apartment_score: score
     }
  end

  private
  def commute_score(duration)
    if duration < 10
      score = 10
    elsif duration >= 10 && duration < 20
      score = 9
    elsif duration >= 20 && duration < 30
      score = 8
    elsif duration >= 30 && duration < 40
      score = 7
    elsif duration >= 40 && duration < 50
      score = 6
    elsif duration >= 50 && duration < 60
      score = 5
    elsif duration >= 60 && duration < 70
      score = 4
    elsif duration >= 70 && duration < 80
      score = 3
    elsif duration >= 80 && duration < 90
      score = 2
    else
      score = 1
    end
  end

  def crime_score(felonies)
    score = felonies / 10
    score >= 10 ? roundScore = 9 : roundScore = score.floor
    10 - roundScore
  end

  def amenities_score
    7
  end

  def school_score(schools)
    score = schools + 4
    score > 10 ? score = 10 : score = score
    score
  end

  def calculate_weights(user)
    weights = {}
    total = user.schools + user.amenities + user.safety + user.commute
    weights[:schools] = user.schools / total.to_f
    weights[:amenities] = user.amenities / total.to_f
    weights[:safety] = user.safety / total.to_f
    weights[:commute] = user.commute / total.to_f
    weights
  end

  def calculate_score(apartment, weights)
    (school_score(apartment.apt_schools.first.a_schools) * weights[:schools]) + (commute_score(apartment.apt_commutes.first.duration.to_i) * weights[:commute]) + (crime_score(apartment.apt_crimes.first.felonies) * weights[:safety]) + (amenities_score * weights[:amenities])
  end

end
