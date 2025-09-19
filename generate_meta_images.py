#!/usr/bin/env python3
"""
Parea Meta OG Image Generator
Automatically captures hero screenshots for social sharing SEO
"""

import asyncio
import os
from playwright.async_api import async_playwright

async def capture_hero_meta_image(site_url, output_path, site_name):
    """Capture hero section screenshot for meta OG image"""
    print(f"📸 Capturing meta image for {site_name}...")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        # Set viewport for optimal OG image dimensions (1200x630)
        await page.set_viewport_size({"width": 1200, "height": 630})
        
        try:
            # Navigate to site
            await page.goto(site_url, wait_until="networkidle")
            
            # Wait for hero section to load
            await page.wait_for_selector('.hero', timeout=10000)
            
            # Wait for hero background image to load
            await page.wait_for_selector('.hero-background img', timeout=5000)
            
            # Take screenshot of just the hero section
            hero_element = await page.query_selector('.hero')
            if hero_element:
                await hero_element.screenshot(path=output_path, quality=90)
                print(f"✅ Meta image saved: {output_path}")
            else:
                print(f"❌ Hero element not found for {site_name}")
                
        except Exception as e:
            print(f"❌ Error capturing {site_name}: {e}")
        finally:
            await browser.close()

async def generate_all_parea_meta_images():
    """Generate meta images for all Parea locations"""
    
    # Ensure img directory exists
    os.makedirs("parea-sites/img", exist_ok=True)
    
    sites = [
        {
            "url": "https://parea-authentic-greek.netlify.app/",
            "output": "parea-sites/img/metaOG-splash.png",
            "name": "Parea Splash"
        },
        {
            "url": "https://parea-authentic-greek.netlify.app/orleans/",
            "output": "parea-sites/img/metaOG-orleans.png", 
            "name": "Parea Orleans"
        },
        {
            "url": "https://parea-authentic-greek.netlify.app/express/",
            "output": "parea-sites/img/metaOG-express.png",
            "name": "Parea Express"
        }
    ]
    
    print("🚀 Starting Parea meta image generation...")
    
    for site in sites:
        await capture_hero_meta_image(site["url"], site["output"], site["name"])
        await asyncio.sleep(2)  # Be nice to the server
    
    print("🎉 All Parea meta images generated!")
    print("\n📋 Next steps:")
    print("1. Review generated images in parea-sites/img/")
    print("2. Update HTML meta tags to use new images")
    print("3. Deploy updated sites")
    print("4. Test social sharing on Facebook/Twitter")

if __name__ == "__main__":
    # Install requirements: pip install playwright
    # Setup: playwright install chromium
    asyncio.run(generate_all_parea_meta_images())
