require_relative '../adapters/crime_adapter.rb'
require_relative '../adapters/distance_adapter.rb'
require_relative '../adapters/map_adapter.rb'
require_relative '../adapters/school_adapter.rb'
require_relative '../adapters/yelp_adapter.rb'

class AptsController < ApplicationController

  def show
     crime_data = CrimeAdapter.get_crime(params["id"])
     distance_data = DistanceAdapter.get_distance(origin: params["id"], destination: "11 broadway, New York, NY 10004")
     
     render json: {crime_data: crime_data, distance_data: distance_data}

  end

end
