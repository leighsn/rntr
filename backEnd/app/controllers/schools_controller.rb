require 'byebug'
require 'httparty'
require_relative '../adapters/school_adapter.rb'

class SchoolsController < ApplicationController

  def show
    zip = params["id"][-5..-1]
    results = SchoolAdapter.get_good_schools(zip)
    byebug
    render json: {schools: results}
  end

  def create
    results = SchoolAdapter.get_school_markers(zipcode: params[:school][:zipcode], grade: params[:school][:grade])
    render json: {schools: results}
  end

end
