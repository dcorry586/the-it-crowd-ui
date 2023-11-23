package org.kainos.ea;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class jobsPage {
    public static WebElement softwareEngineer(WebDriver driver) {

        WebElement button = driver.findElement(By.linkText("Software Engineer"));
        return button;
    }

    public static WebElement dataAnalyst(WebDriver driver) {

        WebElement button = driver.findElement(By.linkText("Data Analyst"));
        return button;
    }

    public static WebElement projectManager(WebDriver driver) {

        WebElement button = driver.findElement(By.linkText("Project Manager"));
        return button;
    }

    public static WebElement networkAdministrator(WebDriver driver) {

        WebElement button = driver.findElement(By.linkText("Network Administrator"));
        return button;
    }

    public static WebElement graphicDesigner(WebDriver driver) {

        WebElement button = driver.findElement(By.linkText("Graphic Designer"));
        return button;
    }

    public static WebElement technicalArchitect(WebDriver driver) {

        WebElement button = driver.findElement(By.linkText("Technical Architect"));
        return button;
    }

    public static WebElement testEngineer(WebDriver driver) {

        WebElement button = driver.findElement(By.linkText("Test Engineer"));
        return button;
    }

    public void clickSoftwareEngineer(WebDriver driver) {
        softwareEngineer(driver).click();
    }
    public void clickProjectManager(WebDriver driver) {
        projectManager(driver).click();
    }
    public void clickDataAnalyst(WebDriver driver) {
        dataAnalyst(driver).click();
    }

    public void clickNetworkAdministrator(WebDriver driver) {
        networkAdministrator(driver).click();
    }

    public void clickGraphicDesigner(WebDriver driver) {
        graphicDesigner(driver).click();
    }

    public void clickTechnicalArchitect(WebDriver driver) {
        technicalArchitect(driver).click();
    }

    public void clicktestEngineer(WebDriver driver) {
        testEngineer(driver).click();
    }
}
