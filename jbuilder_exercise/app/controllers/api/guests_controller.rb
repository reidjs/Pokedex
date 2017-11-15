class Api::GuestsController < ApplicationController
  def index
    # @guests = Guest.find_by(age: [40, 50])
    @guests = Guest.all
    render :index
  end

  def show
    @guest = Guest.find_by(id: params[:id])
    render :show
  end
end
