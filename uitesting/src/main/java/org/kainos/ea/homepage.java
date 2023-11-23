package org.kainos.ea;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class homepage {

    // WebElements --------------------------------------------------------------------------
    public static WebElement Logo (WebDriver driver) {

        WebElement element = driver.findElement(By.linkText("logo-sizing"));

        return element;
    }

    public static WebElement viewJobsButton (WebDriver driver) {

        WebElement button = driver.findElement(By.linkText("View Jobs"));
        return button;
    }

    public static WebElement LoginButton (WebDriver driver) {

        WebElement button = driver.findElement(By.linkText("Login Now"));
        return button;
    }

    public static WebElement homePageTitle (WebDriver driver) {

        WebElement element = driver.findElement(By.cssSelector("body > div.main-content.centre.no-header-image-spacing > div:nth-child(1) > h1"));
        return element;
    }

//--------------------------------------------------------------------------------------------

    // Click on these WebElements ---------------------------------------

    public void clickviewJobsButton(WebDriver driver) {
        viewJobsButton(driver).click();
    }

    public void clickLoginButton(WebDriver driver) {
        LoginButton(driver).click();
    }

    // Gets text

    public void GethomePageTitl(WebDriver driver) {homePageTitle(driver).getText();}



}
