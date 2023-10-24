package org.example.oop;

import processing.core.PApplet;

import java.util.ArrayList;

public class Game extends PApplet {
    public final int SCREEN_WIDTH = 1000;
    public final int SCREEN_HEIGHT = 1000;
    public final int TOTAL_BALLS = 4;
    public final int HEIGHT_RATIO = 5;
    public final int BALL_WIDTH = 20;
    public final int BALL_HEIGHT = 20;
    ArrayList<Ball> balls;

    public Game() {
        balls = new ArrayList<>();
        for (int ballNo = 1; ballNo <= TOTAL_BALLS; ballNo++) {
            Ball ball = new Ball(0, (SCREEN_HEIGHT * ballNo) / HEIGHT_RATIO, ballNo, BALL_WIDTH, BALL_HEIGHT);
            balls.add(ball);
        }
    }

    public static void main(String[] args) {
        PApplet.main("org.example.oop.Game", args);
    }

    @Override
    public void settings() {
        super.settings();
        size(SCREEN_WIDTH, SCREEN_HEIGHT);
    }

    @Override
    public void draw() {
        for (Ball ball : balls) {
            ellipse(ball.positionX, ball.positionY, ball.width, ball.height);
            ball.moveX();
        }
    }
}
