import React, { useState, useEffect, useCallback } from 'react';
import WhiteCardSourceBox from './WhiteCardSourceBox';

import "../../assets/styles/cardhand/cardhand.css";
import "../../assets/styles/dealWhiteCardButton.css";

export default function WhiteCardDragContainer() {
  const [isMounted, setIsMounted] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  useEffect(
    function subscribeToIntervalTick() {
      if (!isDragging) {
        setIsMounted(true);
        return;
      }
      const interval = setInterval(() => setIsMounted(!isMounted), 500);
      return () => clearInterval(interval);
    },
    [isMounted, isDragging]
  );
  const handleBeginDrag = useCallback(() => setIsDragging(true), []);
  const handleEndDrag = useCallback(() => setIsDragging(false), []);
  
  return (
      <div>
      <div className='cards'>
        <div className='card'>
          {isMounted && (
            <div className='card-face'>
            <WhiteCardSourceBox
              id='1'
              name='white card text here'
              onBeginDrag={handleBeginDrag}
              onEndDrag={handleEndDrag}
            />
            </div>
          )}
        </div>
        <div className='card'>
          {isMounted && (
            <div className='card-face'>
            <WhiteCardSourceBox
              id='2'
              name='white card text here'
              onBeginDrag={handleBeginDrag}
              onEndDrag={handleEndDrag}
            />
            </div>
          )}
        </div>
        <div className='card'>
          {isMounted && (
            <div className='card-face'>
            <WhiteCardSourceBox
              id='3'
              name='white card text here'
              onBeginDrag={handleBeginDrag}
              onEndDrag={handleEndDrag}
            />
            </div>
          )}
        </div>
        <div className='card'>
          {isMounted && (
            <div className='card-face'>
            <WhiteCardSourceBox
              id='4'
              name='white card text here'
              onBeginDrag={handleBeginDrag}
              onEndDrag={handleEndDrag}
            />
            </div>
          )}
        </div>
        <div className='card'>
          {isMounted && (
            <div className='card-face'>
            <WhiteCardSourceBox
              id='5'
              name='white card text here'
              onBeginDrag={handleBeginDrag}
              onEndDrag={handleEndDrag}
            />
            </div>
          )}
        </div>
        <div className='card'>
          {isMounted && (
            <div className='card-face'>
            <WhiteCardSourceBox
              id='6'
              name='white card text here'
              onBeginDrag={handleBeginDrag}
              onEndDrag={handleEndDrag}
            />
            </div>
          )}
        </div>
        <div className='card'>
          {isMounted && (
            <div className='card-face'>
            <WhiteCardSourceBox
              id='7'
              name='white card text here'
              onBeginDrag={handleBeginDrag}
              onEndDrag={handleEndDrag}
            />
            </div>
          )}
        </div>
        <div className='card'>
          {isMounted && (
            <div className='card-face'>
            <WhiteCardSourceBox
              id='8'
              name='white card text here'
              onBeginDrag={handleBeginDrag}
              onEndDrag={handleEndDrag}
            />
            </div>
          )}
        </div>
        <div className='card'>
          {isMounted && (
            <div className='card-face'>
            <WhiteCardSourceBox
              id='9'
              name='white card text here'
              onBeginDrag={handleBeginDrag}
              onEndDrag={handleEndDrag}
            />
            </div>
          )}
        </div>
        <div className='card'>
          {isMounted && (
            <div className='card-face'>
            <WhiteCardSourceBox
              id='10'
              name='white card text here'
              onBeginDrag={handleBeginDrag}
              onEndDrag={handleEndDrag}
            />
            </div>
          )}
        </div>
      </div>
      </div>
  );
}
