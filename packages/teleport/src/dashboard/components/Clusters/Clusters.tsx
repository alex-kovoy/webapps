/*
Copyright 2019 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { Flex } from 'design';
import { useStoreClusters } from 'teleport/teleportContextProvider';
import InputSearch from 'teleport/components/InputSearch';
import {
  FeatureBox,
  FeatureHeader,
  FeatureHeaderTitle,
} from 'teleport/dashboard/components/Layout';
import ClusterList from './ClusterList';

export default function Clusters() {
  const { clusters, searchValue, setSearchValue } = useClusters();
  return (
    <FeatureBox>
      <FeatureHeader alignItems="center">
        <Flex alignItems="center" flex="1">
          <FeatureHeaderTitle mr="5">Clusters</FeatureHeaderTitle>
          <InputSearch ml="auto" bg="primary.light" onChange={setSearchValue} />
        </Flex>
      </FeatureHeader>
      <ClusterList clusters={clusters} search={searchValue} />
    </FeatureBox>
  );
}

function useClusters() {
  const store = useStoreClusters();
  const [searchValue, setSearchValue] = React.useState('');

  return {
    clusters: store.state,
    searchValue,
    setSearchValue,
  };
}
