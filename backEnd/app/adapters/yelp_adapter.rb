class YelpAdapter

  def self.client

    @client ||= Yelp::Client.new({ consumer_key: "VgBqgM2m0cFktXaWg7MirA",
                            consumer_secret: "CwavGnQCgdvdVY9fWELZ3ngWhjc",
                            token: "6ekU32QlnASLZQ29K6jV2iH8jg9M39ap",
                            token_secret: "txCmSP_tTYILR2nNPXtJq30RhCQ"
                          })

  end

  def self.search(search:, location:)
    businesses = self.client.search(location, {term: search,radius_filter:1000}).businesses
    businesses.map{|result| {name: result.fetch("name"),
                            lat:result.fetch("coordinate").fetch("latitude"),
                            lon:result.fetch("coordinate").fetch("longitude")
                            }}
  end

end
