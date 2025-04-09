from sklearn.ensemble import RandomForestClassifier, VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import GradientBoostingClassifier # fallback for XGBoost

# Define base models
log_clf = LogisticRegression(class_weight="balanced", max_iter=1000)
rf_clf = RandomForestClassifier(n_estimators=100, random_state=42)
gb_clf = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, random_state=42)

ensemble = VotingClassifier(
) 