import { useSelector } from 'react-redux';
import Preview from './Preview';

export default function Previews() {
  const state = useSelector((state) => state);

  return (
    <div>
      <div class="table-container">
        <table class="booking-table">
          {state[0] && state[0].location && (
            <thead class="bg-gray-100/50">
              <tr class="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th class="text-center">Journey Date</th>
                <th class="text-center">Guests</th>
                <th class="text-center">Class</th>
                <th class="text-center">Delete</th>
              </tr>
            </thead>
          )}
          <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
            {state.map(
              (el) => el.location && <Preview key={el.id} id={el.id} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
