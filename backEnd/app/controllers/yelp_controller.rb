require 'byebug'
require_relative '../adapters/yelp_adapter.rb'

class YelpController < ApplicationController

  def create
     amenities = YelpAdapter.search(search: params[:amenities][:search], location: params[:amenities][:zipcode])
     render json: {amenities: amenities}
  end

end
