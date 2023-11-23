package org.kainos.ea;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class navBar {
    public static WebElement Logo(WebDriver driver) {

        WebElement element = driver.findElement(By.linkText("logo-sizing"));

        return element;
    }

    public static WebElement Jobs(WebDriver driver) {

        WebElement element = driver.findElement(By.linkText("Jobs"));

        return element;
    }

    public static WebElement Account(WebDriver driver) {

        WebElement element = driver.findElement(By.linkText("Account"));
        return element;
    }

    public static WebElement Home (WebDriver driver) {

        WebElement element = driver.findElement(By.linkText("Home"));

        return element;
    }

    public static WebElement loginNav (WebDriver driver) {

        WebElement element = driver.findElement(By.linkText("Login"));
        return element;
    }

    public static WebElement registerNav (WebDriver driver) {

        WebElement element = driver.findElement(By.linkText("Register"));
        return element;
    }

    //clicks elements
    public void clickJobsNav(WebDriver driver) {
        Jobs(driver).click();
    }
    public void clickAccount(WebDriver driver) {
        Account(driver).click();
    }

    public void clickHome(WebDriver driver) {
        Home(driver).click();
    }

    public void clickloginNav(WebDriver driver) {
        loginNav(driver).click();
    }

    public void clickregisterNav(WebDriver driver) {
        registerNav(driver).click();
    }

    public void clickLogo(WebDriver driver) {
        Logo(driver).click();
    }


}
