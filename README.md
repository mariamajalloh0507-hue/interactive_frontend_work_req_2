# Interactive Frontend Work Requirement 2 – Random Fun Fact Viewer

This app displays a random fun fact about me every 2 seconds.  

Facts are loaded from a local `funfacts.json` file in the public folder.

## 🚀 Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/<mariamajalloh0507-hue>/interactive_frontend_work_req_2.git

2. Install Dependencies:
  npm install

3. Start the Development Server:
  npm run dev

HOW DOES IT WORK?
	•	Fun facts are stored in public/funfacts.json.
	•	The app loads them with fetch.
	•	useEffect + setInterval selects a random fact every 2 seconds.
	•	A cleanup function ensures the interval stops when the component unmounts.