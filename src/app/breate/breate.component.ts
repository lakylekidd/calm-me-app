import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breate',
  templateUrl: './breate.component.html'
})
export class BreateComponent implements OnInit {

  public msg: string;
  private delayUntilStart: number = 5;
  private exerciseStepDuration: number = 4000;
  private duration: number = 60000;
  private timeToRedirect: number = 3000;
  inhaleMsg = "Now inhale...";
  exhaleMsg = "And exhale...";
  instructionMsg = "Be still and bring your attention to your breath";
  completedMsg = "You completed the 1 minute breathing exercise!";
  running: boolean = false;

  constructor(private readonly router: Router) {
    
   }

  ngOnInit() {
    this.prepareUserForExercise();
  }

  prepareUserForExercise = () => {
    this.msg = this.instructionMsg + `. The exercise will begin in ${this.delayUntilStart + 1} seconds...`;
    // Run every second
    let counter = this.delayUntilStart;
    let interval = setInterval(() => {
      this.msg = this.instructionMsg + `. The exercise will begin in ${counter} seconds...`;
      counter--;
      // Check if we reached our goal
      if (counter < 0) {
        // Stop this interval
        clearInterval(interval);
        this.beginExercise();
      }
    }, 1000);
  }

  beginExercise = () => {
    // Run exercise
    this.msg = this.inhaleMsg;
    this.running = true;
    let inhale = true;
    let totalMilliseconds = this.exerciseStepDuration;

    inhale = this.checkInhaleOrExhaleMsg(inhale);
    let interval = setInterval(() => {         
      inhale = this.checkInhaleOrExhaleMsg(inhale);
      totalMilliseconds += this.exerciseStepDuration;
      // Check if one minute has passed
      if (totalMilliseconds > this.duration) {
        clearInterval(interval);
        this.running = false;
        this.msg = this.completedMsg;
        // Redirect to main page after 3 seconds
        setTimeout(() => {
          this.router.navigate(['/main']);
        }, this.timeToRedirect);
      }
    }, this.exerciseStepDuration);
  }

  private checkInhaleOrExhaleMsg = (inhale: boolean): boolean => {
    if (inhale) {
      this.msg = this.inhaleMsg;
      inhale = false;
    }
    else {
      this.msg = this.exhaleMsg;
      inhale = true;
    }
    return inhale;
  }

}
