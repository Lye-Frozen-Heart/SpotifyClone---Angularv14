import { TrackModel } from '@core/models/tracks.model';
import { OrderListPipe } from './order-list.pipe';
import * as mockData from '@data/tracks.json';
import { lastValueFrom } from 'rxjs';


describe('OrderListPipe', () => {
  
  it('create an instance', () => {
    const pipe = new OrderListPipe();

    expect(pipe).toBeTruthy();

  });

  it('Trying in and out of the data',() => {
    //Arrange
    const pipe = new OrderListPipe();

    const {data} :any = (mockData as any).default;

    //Act
    const result:TrackModel[] = pipe.transform(data);

    //Assert
    expect(result).toEqual(data);
  });

  it('It must return the tracks ordered by ASC', () => {
    //Arrange
    const pipe = new OrderListPipe();

    const {data} :any = (mockData as any).default;

    const firstSong = data.find((track:any) => track._id === 7 );

    const lastSong = data.find((track:any) => track._id === 6 );

     //Act 
     const result:TrackModel[] = pipe.transform(data,'name','asc');

     const firstResult = result[0];

     const lastResult = result[result.length - 1];

     //Assert
     expect(firstResult).toEqual(firstSong);
     expect(lastResult).toEqual(lastSong);

  });

  it('It must return the tracks ordered by DESC', () => {
    //Arrange
    const pipe = new OrderListPipe();

    const {data} :any = (mockData as any).default;

    const firstSong = data.find((track:any) => track._id === 7 );

    const lastSong = data.find((track:any) => track._id === 6 );

     //Act 
     const result:TrackModel[] = pipe.transform(data,'name','desc');

     const firstResult = result[0];

     const lastResult = result[result.length - 1];

     //Assert
     expect(firstResult).toEqual(lastSong);
     expect(lastResult).toEqual(firstSong);

  })
});
