require_relative '../adapters/crime_adapter.rb'

class CrimesController < ApplicationController

  def show
     crime_data = CrimeAdapter.get_crime(params["id"])
     render json: {crime_data: crime_data}
  end

end
