from playwright.sync_api import sync_playwright

def verify_heardle():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to app...")
            # Increased timeout for initial load
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for title
            page.wait_for_selector("text=Heardle Clone")
            print("Found title.")

            # Check Player
            page.wait_for_selector("button:has-text('Play')")
            print("Found Play button.")

            # Check Search
            page.fill("input[type='text']", "Bohemian Rhapsody")
            print("Typed 'Bohemian Rhapsody'.")

            # Wait for results
            page.wait_for_selector("li", timeout=10000)
            print("Found search results.")

            # Click result
            page.click("li:has-text('Bohemian Rhapsody')")
            print("Clicked result.")

            # Verify guess added
            # Expecting a green box for correct guess
            # Or at least the text in the guesses area
            page.wait_for_selector("text=✅")
            print("Found success checkmark.")

            # Take screenshot
            page.screenshot(path="verification/heardle_screenshot.png")
            print("Screenshot saved.")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error_screenshot.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_heardle()
