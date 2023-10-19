package org.example.procedure;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Game extends PApplet {
    public final int  SCREEN_WIDTH = 1000;
    public final int  SCREEN_HEIGHT = 1000;
    public final int TOTAL_BALLS = 4;
    public final int HEIGHT_RATIO = 5;
    public final int BALL_WIDTH = 20;
    public final int BALL_HEIGHT = 20;

    ArrayList<HashMap<String, Integer>> balls;

    public Game() {
        balls = new ArrayList<>();
        for(int i = 1; i<=TOTAL_BALLS; i++) {
            HashMap<String, Integer> ball = new HashMap<>();
            ball.put("positionX", 0);
            ball.put("positionY", (SCREEN_HEIGHT * i) / HEIGHT_RATIO);
            ball.put("speed", i + 1);
            balls.add(ball);
        }
    }

    public static void main(String[] args) {
        PApplet.main("org.example.procedure.Game", args);
    }

    @Override
    public void settings() {
        super.settings();
        size(SCREEN_WIDTH, SCREEN_HEIGHT);
    }

    @Override
    public void draw() {
        for(HashMap<String, Integer> ball: balls){
            System.out.println(ball.get("positionX"));
            ellipse(ball.get("positionX"), ball.get("positionY"), BALL_WIDTH, BALL_HEIGHT);
            int moveX = ball.get("positionX") + ball.get("speed");
            ball.put("positionX", moveX);
        }
    }
}
