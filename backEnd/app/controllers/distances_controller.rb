require 'byebug'
require 'httparty'
require_relative '../adapters/distance_adapter.rb'

class DistancesController < ApplicationController

  def create
     DistanceAdapter.get_distance(origin: params[:route][:origin], destination: params[:route][:destination])
     byebug
  end

end 

