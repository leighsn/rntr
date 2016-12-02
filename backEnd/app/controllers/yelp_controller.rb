require 'byebug'
require 'httparty'
require_relative '../adapters/distance_adapter.rb'

class YelpController < ApplicationController

  def create
     amenities = YelpAdapter.search(search: params)
     render json: {amenities: amenities}
  end

end
