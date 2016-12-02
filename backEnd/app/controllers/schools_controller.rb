require 'byebug'
require 'httparty'
require_relative '../adapters/school_adapter.rb'

class SchoolsController < ApplicationController

  def create
    results = SchoolAdapter.get_school_markers(zipcode: params[:school][:zipcode], grade: params[:school][:grade])
    render json: {schools: results}
  end

end
