const workStages = document.getElementById('stages');
const stage1Content = document.getElementById('stage1');
const stage2Content = document.getElementById('stage2');
const stage3Content = document.getElementById('stage3');
const stage4Content = document.getElementById('stage4');
const stage5Content = document.getElementById('stage5');
const stage6Content = document.getElementById('stage6');
const stage7Content = document.getElementById('stage7');
const stage8Content = document.getElementById('stage8');
const stage9Content = document.getElementById('stage9');
const stage10Content = document.getElementById('stage10');

workStages.addEventListener('change', function () {
  const selectedStage = workStages.value;
  
  // Hide all content sections
  stage1Content.style.display = 'none';
  stage2Content.style.display = 'none';
  stage3Content.style.display = 'none';
  stage4Content.style.display = 'none';
  stage5Content.style.display = 'none';
  stage6Content.style.display = 'none';
  stage7Content.style.display = 'none';
  stage8Content.style.display = 'none';
  stage9Content.style.display = 'none';
  stage10Content.style.display = 'none';
  // Add more content sections if needed

  // Show the selected content section
  if (selectedStage === 'stage1') {
    stage1Content.style.display = 'block';
  } else if (selectedStage === 'stage2') {
    stage2Content.style.display = 'block';
  }else if (selectedStage === 'stage3') {
    stage3Content.style.display = 'block';
  }else if (selectedStage === 'stage4') {
    stage4Content.style.display = 'block';
  }else if (selectedStage === 'stage5') {
    stage5Content.style.display = 'block';
  }else if (selectedStage === 'stage6') {
    stage6Content.style.display = 'block';
  }else if (selectedStage === 'stage7') {
    stage7Content.style.display = 'block';
  }else if (selectedStage === 'stage8') {
    stage8Content.style.display = 'block';
  }else if (selectedStage === 'stage9') {
    stage9Content.style.display = 'block';
  }else if (selectedStage === 'stage10') {
    stage10Content.style.display = 'block';
  }
  // Add more conditions for additional content sections
});

//reset button scrip 

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', function () {
  // Reset the dropdown to its initial state (first option)
  workStages.selectedIndex = 0;

  // Hide all content sections
  stage1Content.style.display = 'none';
  stage2Content.style.display = 'none';
  stage3Content.style.display = 'none';
  stage4Content.style.display = 'none';
  stage5Content.style.display = 'none';
  stage6Content.style.display = 'none';
  stage7Content.style.display = 'none';
  stage8Content.style.display = 'none';
  stage9Content.style.display = 'none';
  stage10Content.style.display = 'none';
  // Add more content sections if needed
});