# sample request url: https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyAkmquJSszSyTQei0VfZkamDVtODzYK1kE
# API Key: AIzaSyAkmquJSszSyTQei0VfZkamDVtODzYK1kE
require 'byebug'
require 'httparty'
class DistanceAdapter 
  include HTTParty

  def self.get_distance(origin:, destination:)
     response = self.get("https://maps.googleapis.com/maps/api/directions/json?origin=#{origin}&destination=#{destination}4&key=AIzaSyAkmquJSszSyTQei0VfZkamDVtODzYK1kE")
     byebug 
    
     response.body
  end
end

