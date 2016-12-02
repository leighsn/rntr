require 'byebug'
require 'httparty'

class GetautocompletesAdapter
  include HTTParty
  key = "AIzaSyAkmquJSszSyTQei0VfZkamDVtODzYK1kE"
  def self.get_autocompletes(searchTerm)
     response = self.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=#{searchTerm}&location=40.766485,-73.978221&radius=500&key=#{key}")
     result = JSON(response.body)
     byebug
  end
end



