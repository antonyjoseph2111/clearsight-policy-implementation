import os
import shutil

source_dir = os.getcwd()
submission_dir = os.path.join(source_dir, 'finalsubmission_govt')

# Create directories
public_dir = os.path.join(submission_dir, 'public')
if os.path.exists(submission_dir):
    shutil.rmtree(submission_dir)
os.makedirs(submission_dir)
os.makedirs(public_dir)

print(f"Created submission directory: {submission_dir}")
print(f"Created public directory: {public_dir}")

# Define file categories
web_extensions = ['.html', '.css', '.js', '.csv', '.png', '.json']
source_extensions = ['.py', '.md']

files_copied = 0

for file in os.listdir(source_dir):
    if os.path.isfile(file):
        _, ext = os.path.splitext(file)
        
        # Copy web assets to public
        if ext in web_extensions:
            shutil.copy2(os.path.join(source_dir, file), os.path.join(public_dir, file))
            files_copied += 1
            print(f"Copied to public: {file}")
            
        # Copy source scripts to root (for government reference, not hosting)
        elif ext in source_extensions or file == 'Dockerfile':
             shutil.copy2(os.path.join(source_dir, file), os.path.join(submission_dir, file))
             files_copied += 1
             print(f"Copied to root: {file}")

# Create index.html in public pointing to landing.html
landing_path = os.path.join(public_dir, 'landing.html')
index_path = os.path.join(public_dir, 'index.html')
if os.path.exists(landing_path):
    shutil.copy2(landing_path, index_path)
    print("Created public/index.html from landing.html")

print(f"\nSuccessfully packaged {files_copied} files into 'finalsubmission'.")
