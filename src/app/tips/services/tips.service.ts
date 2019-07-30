import { Injectable } from '@angular/core';

export interface ITipItem {
  id: number;
  title: string;
  content: string;
}

const tips: ITipItem[] = [
  { id: 1, title: "Do one thing at a time.", content: "Stop multi-tasking. Focus on one thing. Take it easy and do it well."},
  { id: 2, title: "Do things slowly and with attention.", content: "Be fully attentive to the things you do and do them with attention."},
  { id: 3, title: "Do less.", content: "We want to do everything that other people do. This is not necessary. Do less and only the things that make you feel good."},
  { id: 4, title: "Don't do things right after each other.", content: "Take a short break between two different activities. This way you can put one task away from you and recharge for a new one."},
  { id: 5, title: "Do nothing at least fifteen minutes a day.", content: "No smartphone, no TV, no book. Just do nothing at all and enjoy the moment."},
  { id: 6, title: "Stop worrying about the future, focus your attention on the present.", content: "Numerous things can happen in the future. However, most of the things you worry about will never happen. Stop worrying and focus on the present."},
  { id: 7, title: "Stay with your full attention when talking to someone.", content: "Listen for the full hundred percent if you are talking to someone. Keep your phone in your pocket and show interest in your conversation partner."},
  { id: 8, title: "Eat quietly and with attention.", content: "Be grateful for the food you have. Eat it with care and do no other things while eating."},
  { id: 9, title: "Live a little quieter and less hectic.", content: "Do not let life pass by at a rapid pace. Live quietly and learn to enjoy small things."},
  { id: 10, title: "Make cleaning and cooking your meditation moment.", content: "For many people a burden, but cooking and cleaning are ideal moments to meditate. Do it with your full concentration. If you get frustrated, concentrate on your breath again and release the tension."},
  { id: 11, title: "Sleep more.", content: "Many people have too little sleep due to their busy lives and are therefore easily stimulated. Try to sleep half an hour longer and you will feel more rested and fit. Also read our tips for Yoga before going to sleep , which helps you get a better night's sleep."},
  { id: 12, title: "Help other people (without expecting anything in return).", content: "One of the most important Mindfulness tips I can give you is to help other people. You get so much gratitude in return."},
  { id: 13, title: "Move more.", content: "If you want to feel good, healthy and mindful, a healthy body is important. So make sure you get enough exercise."},
  { id: 14, title: "Meditate every day.", content: "Meditation is very healthy. It brings your attention to the here and now and relieves you of all the stress and hectic pace. Read some  meditation tips for beginners here."},
  { id: 15, title: "Eat healthy.", content: "A healthy mind requires a healthy body. Therefore, make sure that you do not work in too much 'junk'. For example, try the Paleo diet."},
  { id: 16, title: "Be grateful.", content: "Instead of always wanting more, learn to be satisfied and grateful with what you have."},
  { id: 17, title: "Turn off your phone for a while.", content: "Be unavailable for a while. Don't send an app. Don't check email. Put your phone out for a nice night out."},
  { id: 18, title: "Focus on your breath when you are stressed.", content: "Everyone sometimes suffers from stressful moments. Try not to avoid them, but to accept them. Focus on your breath for a few moments if you suffer from stress."},
  { id: 19, title: "Forgive yourself.", content: "You are not perfect. Nobody is perfect. Accept yourself as you are and forgive yourself for the mistakes you make."},
  { id: 20, title: "Drive slowly.", content: "Traffic is one of those things that most people get very stressed out by. Make sure you are not that person. Drive slowly and enjoy your ride ;-)."},
  { id: 21, title: "Go for a walk.", content: "Instead of all coming outside to move from point A to B, go for a nice walk. Go outside to 'be outside'."},
  { id: 22, title: "Watch less television.", content: "All programs on TV fill your mind with 1001 thoughts. Leave the television for what it is. For example, read a book, go outside or try Yoga."},
  { id: 23, title: "Be 'open minded'.", content: "Be open-minded. Be open to new things. Don't be afraid to change. Become a student of life and learn as much as possible."},
];

@Injectable()
export class TipsService {

  constructor() { }

  getRandomTip = (): Promise<ITipItem> => {

    return new Promise<ITipItem>(resolve => setTimeout(() => {
      const index = this.rndNbr() - 1;
      resolve(tips[index]);
    }, 1000));
  }

  private rndNbr = () => {
    return Math.floor(Math.random() * tips.length) + 1;
  }

}
