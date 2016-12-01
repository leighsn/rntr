class UsersController < ApplicationController
  has_many: :destinations

 def show
    user = User.find_by(email: params[:email])
    jwt = Auth.issue({user_id: user.id})
     render json: {jwt: jwt}
 end

 def create
   user = User.new(user_params)

   if user.save
     jwt = Auth.issue({user_id: user.id})
     render json: {jwt: jwt}

   else
     render json: {error: 'user not found'}
   end

 end

 def index
   @users = User.all
   render json: {users: @users.to_json}
 end

 def user_params
   params.require(:user).permit(:email, :password)
 end

end
