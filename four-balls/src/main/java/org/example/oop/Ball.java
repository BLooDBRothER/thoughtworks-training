package org.example.oop;

public class Ball {
    int positionX, positionY, speed;
    int width, height;

    public Ball(int positionX, int positionY, int speed, int width, int height){
        this.positionX = positionX;
        this.positionY = positionY;
        this.speed = speed;
        this.width = width;
        this.height = height;
    }

    public void moveX() {
        positionX += speed;
    }
}
