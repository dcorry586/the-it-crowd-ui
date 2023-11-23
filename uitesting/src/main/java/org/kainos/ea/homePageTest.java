package org.kainos.ea;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import java.time.Duration;

public class homePageTest {
    @Test
    public void areAllLinksWorkinghome()  {

        WebDriver driver = new ChromeDriver();
        driver.get("http://localhost:3000");

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        homepage homepage = new homepage();
        navBar navBar = new navBar();

       homepage.clickLoginButton(driver);
       System.out.println("here");

        homepage.clickviewJobsButton(driver);
        System.out.println("here2");

        navBar.clickLogo(driver);

        driver.quit();

    }
}
