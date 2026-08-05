import os
from PIL import Image

public_dir = r"c:\Users\jaysh\Desktop\MERN Projects\Creative-Portfolio\public"

image_files = [
    "about.png",
    "kids-learning.png",
    "main-hero.png",
    "process-bg.png",
    "restaurant-website.png",
    "skincare-branding.png",
    "social-media.png",
    "talk-bg.png"
]

print("Starting image optimization...")
for img_name in image_files:
    png_path = os.path.join(public_dir, img_name)
    if os.path.exists(png_path):
        base_name = os.path.splitext(img_name)[0]
        webp_path = os.path.join(public_dir, f"{base_name}.webp")
        
        with Image.open(png_path) as img:
            # Convert RGBA or RGB to WebP with optimal compression
            img.save(webp_path, "WEBP", quality=82, method=6, optimize=True)
            
        orig_size = os.path.getsize(png_path)
        webp_size = os.path.getsize(webp_path)
        savings = (1 - (webp_size / orig_size)) * 100
        print(f"Compressed {img_name}: {orig_size / 1024:.1f} KB -> {webp_path}: {webp_size / 1024:.1f} KB ({savings:.1f}% saved)")

print("Optimization complete!")
