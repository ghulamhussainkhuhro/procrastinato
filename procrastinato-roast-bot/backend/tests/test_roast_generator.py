# backend/tests/test_roast_generator.py

from app.services.roast_generator import generate_roast

def test_generate_roast():
    user_message = "I’ll start my assignment tomorrow."
    try:
        roast = generate_roast(user_message)
        print("Roast:", roast)
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    test_generate_roast()
