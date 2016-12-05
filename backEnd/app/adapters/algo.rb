class ScoreAlgo
  def self.calculate_score(edu: 1, edu_weight: 0.5, amen: 1, amen_weight: 0.5, dist:30, dist_weight: 0.5, crime: 30, crime_weight: 0.5)
    edu_final = edu*edu_weight
    amen_final = amen*amen_weight
    dist_final = (dist/30)*dist_weight
    crime_final = (crime/30)*crime_weight
    total = edu_final + amen_final + dist_final + crime_final
    total * 2.5
  end
end
