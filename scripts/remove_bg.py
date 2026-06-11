"""One-off: strip the background from the cartoon portrait -> transparent PNG."""
import sys
from rembg import remove, new_session
from PIL import Image

src = "public/cartoon.png"
dst = "public/cartoon-nobg.png"

img = Image.open(src).convert("RGBA")
# u2net is great for people/figures
session = new_session("u2net")
out = remove(img, session=session, post_process_mask=True)
out.save(dst)
print(f"saved {dst} size={out.size}")
