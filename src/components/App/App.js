import React from 'react';
import { View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Desks from "../../panels/Desks/Desks";
import Columns from "../../panels/Columns/Columns";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { panel } from "./constants";
import Context from "./context";
import { useAppState } from "./hooks";

const App = () => {
  const state = useAppState();

	return (
	  <ErrorBoundary>
      <Context.Provider value={state}>
        <ErrorBoundary>
          <View activePanel={state.activePanel} header={false} popout={state.popout}>
            <Panel id={panel.desks} separator={false}>
              <Desks />
            </Panel>

            <Panel id={panel.columns} separator={false} className="Columns">
              {state.activeDesk && <Columns />}
            </Panel>
          </View>
        </ErrorBoundary>
      </Context.Provider>
    </ErrorBoundary>
	);
};

export default App;

