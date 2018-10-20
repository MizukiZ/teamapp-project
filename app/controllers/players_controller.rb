# frozen_string_literal: true

# Players Controller documentation
# User can add and delete players
class PlayersController < ApplicationController

  def show
    @team = Team.find(params[:id])
    @player = @team.players.find(params[:team_id])
  end

  def new
    @team = Team.find(params[:id])
    @player = @team.player.new
  end

  def edit
    @team = Team.find(params[:id])
    @player = Player.find(params[:team_id])
  end

  def create
    @team = Team.find(params[:team_id])
    @player = @team.players.create(player_params)
    redirect_to @team
  end

  def update
    @team = Team.find(params[:team_id])
    @player = Player.find(params[:id])

    if @player.update(player_params)
      redirect_to @team
    else
      redirect_back(fallback_location: edit_team_player_path)
    end
  end

  def destroy
    @team = Team.find(params[:team_id])
    @player = @team.players.find(params[:id])
    @player.destroy
    redirect_to team_path(@team)
  end

  private

  def player_params
    params.require(:player).permit(:id, :name)
  end
end

