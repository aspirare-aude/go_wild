class ScreencastsController < ApplicationController
  before_filter :authenticate_user!

  def index
    render json: Screencast.all
  end

  # GET /screencasts/:id
  # GET /screencasts/:id.json
  def show
    render json: Screencast.find(params[:id])
  end
end
