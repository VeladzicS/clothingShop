import { React, useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/Spinner.component"

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

const CollectionPageContainer  = lazy(() => import('../collectionPage/CollectionPage.container'));
const CollectionsOverviewContainer  = lazy(() => import('../../components/collectionsOverview/CollectionsOverview.container'));

const ShopPage = ({ match, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
    /*    return () => {
      cleanup;
    }; */
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
    <Suspense fallback={<Spinner/>}>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
