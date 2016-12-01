require 'byebug'
require 'httparty'
class DistanceController < ApplicationController

  def create
     response = HTTPARTY.get("https://maps.googleapis.com/maps/api/directions/json?origin=#{origin}&destination=#{destination}4&key=AIzaSyAkmquJSszSyTQei0VfZkamDVtODzYK1kE")
     byebug
  end

end 
