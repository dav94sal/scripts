import webbrowser
import time
import os

# List of URLs to open
urls = [
    "https://docs.google.com/document/d/1y6-LV9h100EzaoJvVpzRfKRiHtfDMw8Ce1jVPi9xgzI/edit?tab=t.0",
    "https://docs.google.com/document/d/16M6FZE4LLRqVZ2ND1IMgdN9JiF6maQ3jyjkDnoyxOtk/edit?tab=t.0",
]


def get_valid_input():
    """
        A function to determine if the user needs a tab for their Total Behavioral Health appointment
    """

    appt = input('Do you have an appointment today? ')

    if appt == 'y':
        print('Adding Total Behavioral Health tab! ')
        urls.append("https://total.doxy.me/behavioral")
    elif appt != 'n':
        print('Please enter "y" for yes or "n" for no... ')
        time.sleep(3)
        return False

    print("sorting urls...")
    urls.sort(reverse=True)
    return True


# Will return true if input was valid
valid_input = get_valid_input()

# Continuously prompt user until a valid response is given
while not valid_input:
    valid_input = get_valid_input()

# Register Google Chrome as the default browser
chrome_path = "C:\Program Files\Google\Chrome\Application\chrome.exe"
webbrowser.register('chrome', None, webbrowser.BackgroundBrowser(chrome_path))

# Open each URL in Google Chrome with a delay
for url in urls:
    # Need to open in seperate tabs - done!
    # Check location of chrome.exe

    webbrowser.get('chrome').open_new(url)
    time.sleep(2)  # Wait for 2 seconds before opening the next URL
