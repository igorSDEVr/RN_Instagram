import * as C from './styled';
import { searchData } from '@app/data/searchData';

export const SearchContent = props => {
  
  return (
    <C.Container>
      {searchData.map((data, index) => {
        return (
          <C.View1 key={index}>
            {data.id === 0 ? (
              <C.View2>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <C.Touch1
                      key={imgIndex}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      >
                      <C.Img1
                        source={imageData}
                      />
                    </C.Touch1>
                  );
                })}
              </C.View2>
            ) : null}
            {data.id === 1 ? (
              <C.View3>
                <C.View4>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <C.Touch2
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}>
                        <C.Img2
                          source={imageData}
                        />
                      </C.Touch2>
                    );
                  })}
                </C.View4>
                <C.Touch4
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                >
                  <C.Img3
                    source={data.images[5]}
                  />
                </C.Touch4>
              </C.View3>
            ) : null}
            {data.id === 2 ? (
              <C.View5>
                <C.Touch5
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                >
                  <C.Img4
                    source={data.images[2]}
                  />
                </C.Touch5>
                <C.View6>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <C.Touch6
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                      >
                        <C.Img5
                          source={imageData}
                        />
                      </C.Touch6>
                    );
                  })}
                </C.View6>
              </C.View5>
            ) : null}
          </C.View1>
        );
      })}
    </C.Container>
  );
};