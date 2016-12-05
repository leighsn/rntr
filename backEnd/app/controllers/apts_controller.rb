require_relative '../adapters/crime_adapter.rb'
require_relative '../adapters/distance_adapter.rb'
require_relative '../adapters/map_adapter.rb'
require_relative '../adapters/school_adapter.rb'
require_relative '../adapters/yelp_adapter.rb'

class AptsController < ApplicationController

  def show

    data = params["id"].split("&")
    address = data[0]
    id = data[1]
    user = User.find(id)

     zip = address[-5..-1]
     crime_data = CrimeAdapter.get_crime(address)
     scores[:crime] = crime_score(crime_data[:felony])
     distance_data = DistanceAdapter.get_distance(origin: address, destination: "11 broadway, New York, NY 10004")
     school_data = SchoolAdapter.get_good_schools(zip)
     render json: {crime_data: crime_data, distance_data: distance_data, school_data: school_data.length}

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

  def calculate_weights(prefs)
    total = prefs[:schools] + prefs[:amenities] + prefs[:safety] + prefs[:commute]
    weights[:schools] = prefs[:schools] / total.to_f
    weights[:amenities] = prefs[:amenities] / total.to_f
    weights[:safety] = prefs[:safety] / total.to_f
    weights[:commute] = prefs[:commute] / total.to_f
    weights
  end

  def calculate_score(scores, weights)
    (scores[:schools] * weights[:schools]) + (scores[:commute] * weights[:commute]) + (scores[:safety] * weights[:safety]) + (scores[:amenities] * weights[:amenities])
  end

end
end
