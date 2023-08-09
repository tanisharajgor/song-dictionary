import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Set the path to the ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the group name. All lower case no space. (Ex: New Jeans - newjeans");
        String artist = scanner.nextLine();
        System.out.println("Enter the song name. All lower case no space. (Ex: Super Shy - supershy");
        String name = scanner.nextLine();

        Song song = new Song(artist, name);

        // Initialize ChromeDriver
        WebDriver driver = new ChromeDriver();

        try {
            driver.get(String.format("https://www.azlyrics.com/lyrics/%s/%s.html", song.getArtist(), song.getName()));

            // Find the element containing the "Sorry about that." text
            WebElement romanizedElement = driver.findElement(By.xpath("//*[contains(text(), '[Romanized:]')]"));

            WebElement parentDiv = (WebElement) ((org.openqa.selenium.JavascriptExecutor) driver)
                    .executeScript("return arguments[0].parentNode;", romanizedElement);

            // Get all the text within the parent div element
            String contentWithinParentDiv = parentDiv.getText().trim();

            System.out.println(contentWithinParentDiv);

            driver.get("https://www.youtube.com/");
            WebElement searchBox = driver.findElement(By.name("search_query"));
            searchBox.sendKeys(song.getArtist() + " " + song.getName() + " instrumental");
            searchBox.sendKeys(Keys.ENTER);

            // Wait for the search results to load
            Thread.sleep(3000);

            // Find the link to the first video in the search results
            WebElement firstVideoLink = driver.findElement(By.cssSelector("a#video-title"));
            String videoLink = firstVideoLink.getAttribute("href");

            System.out.println("Link to instrumental:");
            System.out.println(videoLink);
        } catch (Exception e) {
            System.out.println("An error occurred: " + e);
        } finally {
            driver.quit();
        }
    }
}