class UsersController < ApplicationController


 def show
    user = User.find_by(email: params[:email])
    jwt = Auth.issue({user_id: user.id})
     render json: {jwt: jwt, user_id: user.id, user_email: user.email}
 end

 def create
   user = User.new(user_params)

   if user.save
     jwt = Auth.issue({user_id: user.id})
     render json: {jwt: jwt, user_id: user.id, user_email: user.email}

   else
     render json: {error: 'email is not unique'}
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
