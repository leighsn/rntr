require 'byebug'
require 'httparty'
require_relative '../adapters/distance_adapter.rb'

class DistancesController < ApplicationController

  def create
     travel_time = DistanceAdapter.get_distance(origin: params[:route][:origin], destination: params[:route][:destination])
     render json: {travel_time: travel_time}
  end

end 

