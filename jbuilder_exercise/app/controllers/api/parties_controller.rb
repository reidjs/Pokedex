class Api::PartiesController < ApplicationController
  def index
    @parties = Party.all
    render :index
  end

  def show
    @party = Party.includes(guests: [:gifts]).find_by(id: params[:id])
    # @party = Party.find_by(id: params[:id])
    # @party
    render :show
  end
end
