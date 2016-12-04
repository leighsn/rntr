require_relative '../adapters/crime_adapter.rb'
require_relative '../adapters/distance_adapter.rb'
require_relative '../adapters/map_adapter.rb'
require_relative '../adapters/school_adapter.rb'
require_relative '../adapters/yelp_adapter.rb'

class AptsController < ApplicationController

  def show
     zip = params["id"][-5..-1]
     crime_data = CrimeAdapter.get_crime(params["id"])
     distance_data = DistanceAdapter.get_distance(origin: params["id"], destination: "11 broadway, New York, NY 10004")
     school_data = SchoolAdapter.get_good_schools(zip)
     render json: {crime_data: crime_data, distance_data: distance_data, school_data: school_data.length}

  end

  private
  def commute_score
  end

  def crime_score(felonies)

  end

  def amenities_score
  end

  def school_score
  end

end
