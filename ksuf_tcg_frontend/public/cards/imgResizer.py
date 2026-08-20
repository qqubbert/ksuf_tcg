from pathlib import Path
from PIL import Image, ImageOps

INPUT_DIR = Path("./imgsBackup")
OUTPUT_DIR = Path("./imgs_processed")

WIDTH = 260
HEIGHT = 380
QUALITY = 85


def process_image(input_path: Path, output_path: Path):
    with Image.open(input_path) as image:
        print(
            f"  format={image.format}, "
            f"size={image.size}, "
            f"mode={image.mode}"
        )

        # Исправляем EXIF orientation
        image = ImageOps.exif_transpose(image)

        # GIF: берём первый кадр
        if getattr(image, "is_animated", False):
            image.seek(0)
            image = image.convert("RGBA")

        # Приводим к RGBA
        if image.mode != "RGBA":
            image = image.convert("RGBA")

        # Обрезаем/масштабируем до точного размера
        image = ImageOps.fit(
            image,
            (WIDTH, HEIGHT),
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.5),
        )

        image.save(
            output_path,
            format="WEBP",
            quality=QUALITY,
            method=6,
        )


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    files = [
        path
        for path in INPUT_DIR.iterdir()
        if path.is_file()
    ]

    print(f"Файлов найдено: {len(files)}\n")

    processed = 0
    failed = 0

    for index, input_path in enumerate(files, start=1):
        output_path = OUTPUT_DIR / f"{input_path.stem}.webp"

        print(
            f"[{index}/{len(files)}] "
            f"{input_path.name}"
        )

        try:
            process_image(input_path, output_path)

            print(
                f"  -> {output_path.name}\n"
            )

            processed += 1

        except Exception as error:
            print(
                f"  [ERROR] {error}\n"
            )

            failed += 1

    print("================================")
    print(f"Обработано: {processed}")
    print(f"Ошибок:     {failed}")
    print("================================")


if __name__ == "__main__":
    main()