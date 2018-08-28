import cv2
import numpy as np

def process_img(image):
    original_image = image
    # Convert to gray
    processed_img = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # Edge detection
    processed_img = cv2.Canny(processed_img, threshold1=200, threshold2=300)
    vertices = np.array([[0, 558], [780, 0], [935, 0], [1525, 1080], [0,1080]], np.int32)
    processed_img = roi(processed_img, [vertices])
    #showCrosshair = False
    #fromCenter = False
    #r = cv2.selectROI("Image", processed_img, fromCenter, showCrosshair)
    return processed_img

def roi(img, vertices):
    #blank mask:
    mask = np.zeros_like(img)
    # fill the mask
    cv2.fillPoly(mask, vertices, 255)
    # now only show the area that is the mask
    masked = cv2.bitwise_and(img, mask)
    return masked

def main():
    image = cv2.imread('/Users/lamhoangtung/Desktop/realtime-traffic-density-estimation/My Datasets/pic1.jpg')
    cv2.imshow('image',process_img(image))
    cv2.waitKey(0)
    cv2.destroyAllWindows()

main()
