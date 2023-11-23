package org.kainos.ea;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import java.time.Duration;


public class jobPageTest {
    @Test
    public void checkIfAllLinksWork()  {

        WebDriver driver = new ChromeDriver();
        driver.get("http://localhost:3000/jobs");

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));

        driver.findElement(By.linkText("Jobs")).click();

        driver.findElement(By.linkText("Software Engineer")).click();

        driver.navigate().back();

        driver.findElement(By.linkText("Data Analyst")).click();

        driver.navigate().back();

        driver.findElement(By.linkText("Project Manager")).click();

        driver.navigate().back();

        driver.findElement(By.linkText("Network Administrator")).click();

        driver.navigate().back();

        driver.findElement(By.linkText("Graphic Designer")).click();

        driver.navigate().back();

        driver.findElement(By.linkText("Technical Architect")).click();

        driver.navigate().back();

        driver.findElement(By.linkText("Test Engineer")).click();

        driver.quit();
    }


}
