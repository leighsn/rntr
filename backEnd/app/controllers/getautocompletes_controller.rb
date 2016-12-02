require 'byebug'
require 'httparty'
require_relative '../adapters/getautocompletes_adapter.rb'

class GetautocompletesController < ApplicationController

  def show
    autocompletes = GetautocompletesAdapter.get_autocomplete(params[:id])
    render json: {autocompletes: autocompletes}
  end

end