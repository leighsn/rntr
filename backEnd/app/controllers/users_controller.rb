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

 def update
   user = User.find(params["id"])
   user.update(user_params)
   render json: {user_id: user.id, destination: user.destination, commute: user.commute, safety:user.safety, amenities: user.amenities, schools: user.schools}
 end

 def index
   @users = User.all
   render json: {users: @users.to_json}
 end

 def user_params
   params.require(:user).permit(:email, :password, :commute, :safety, :destination, :schools, :amenities)
 end

end
