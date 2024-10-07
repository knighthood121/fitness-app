import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Here's a well-rounded workout session that targets all major muscle
          groups and includes both strength and cardio elements. This session
          can be done at the gym or at home with minimal equipment.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Bootcamp workouts are high-intensity fitness programs that combine
          elements of strength training, cardiovascular exercise, and functional
          movements. They are inspired by military training and are designed to
          push participants to their physical and mental limits
        </p>
        <div className="bootcamps">
          <div>
            <h4>Intensity</h4>
            <p>
              Bootcamp workouts are known for their high intensity, involving
              rapid sequences of exercises with minimal rest.
            </p>
          </div>
          <div>
            <h4>Variety</h4>
            <p>
              They include a mix of exercises such as push-ups, squats, lunges and 
              burpees, often using bodyweight or minimal equipment like resistance 
              bands and kettlebells
            </p>
          </div>
          <div>
            <h4>Group Setting</h4>
            <p>
              These workouts are typically done in groups, fostering a sense of camaraderie
              and motivation among participants.
            </p>
          </div>
          <div>
            <h4>Comprehensive Training </h4>
            <p>
              They target all major muscle groups and improve cardiovascular endurance, 
              strength, flexibility, and coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
